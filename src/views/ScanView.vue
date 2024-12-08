<template>
  <div class="container">
    <h1 class="header">Scan Tiket ATMICUP</h1>
    <p class="description">Silahkan siapkan QR code Anda.</p>

    <!-- Tombol untuk memulai scan -->
    <button @click="startScanning" v-if="!isScanning" class="scan-btn">Mulai Scan Tiket</button>

    <!-- Video untuk scanner -->
    <div v-if="isScanning" class="scanner-container">
      <video ref="scannerVideo" autoplay playsinline class="scanner-video"></video>
      <div class="scanner-controls">
        <button @click="toggleCamera" class="control-btn">Ganti Kamera</button>
        <button @click="stopScanning" class="control-btn stop-btn">Berhenti Scan</button>
      </div>
    </div>

    <!-- Pesan error dan hasil -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="decodedResult" class="success">Hasil: {{ decodedResult }}</p>
  </div>
</template>

<script>
import { BrowserMultiFormatReader } from "@zxing/library";
import Swal from "sweetalert2";

function parseBarcode(barcode) {
  const result = {};
  const segments = barcode.split(";");
  segments.forEach((segment) => {
    if (segment.startsWith("VERSION")) {
      result.version = segment.split(" ")[1];
    } else if (segment.startsWith("CONCERT TICKET")) {
      result.type = "CONCERT TICKET";
    } else if (segment.startsWith("ATMICUP") && segment !== "ATMICUP QRSS") {
      result.edition = segment.split(" ")[1];
    } else if (segment.startsWith("ORDER")) {
      result.order = segment.split(" ")[1];
    } else if (segment.startsWith("CUSTOMER")) {
      result.customer = segment.split(" ")[1];
    } else if (segment.startsWith("ID")) {
      result.id = segment.split(" ")[1];
    } else if (segment.startsWith("REG ID")) {
      result.regId = segment.split(" ").slice(2).join(" ");
    } else if (segment.startsWith("SECURITY")) {
      result.security = segment.split(" ")[1];
    }
  });
  return result;
}

export default {
  data() {
    return {
      isScanning: false,
      errorMessage: null,
      codeReader: null,
      useFrontCamera: false,
    };
  },
  methods: {
    async startScanning() {
      this.isScanning = true;
      this.errorMessage = null;

      this.codeReader = new BrowserMultiFormatReader();

      try {
        const videoElement = this.$refs.scannerVideo;
        const constraints = {
          video: {
            facingMode: this.useFrontCamera ? "user" : "environment",
          },
        };

        this.codeReader.decodeFromConstraints(
          constraints,
          videoElement,
          (result, error) => {
            if (result) {
              console.log("Hasil QR Code:", result.getText());
              this.stopScanning();
              this.processScanResult(result.getText());
            } else if (error && error.name !== "NotFoundException") {
              console.warn("QR Code Error:", error);
            }
          }
        );
      } catch (err) {
        this.errorMessage = `Error memulai scanner: ${err.message}`;
        console.error(err);
        this.stopScanning();
      }
    },
    stopScanning() {
      this.isScanning = false;
      if (this.codeReader) {
        this.codeReader.reset();
      }
    },
    toggleCamera() {
      this.useFrontCamera = !this.useFrontCamera;
      this.stopScanning();
      this.startScanning();
    },
    processScanResult(decodedData) {
      try {
        const parsedResult = parseBarcode(decodedData);
        console.log("Hasil parsing:", parsedResult);
        this.showResult(parsedResult);
      } catch (error) {
        this.errorMessage = "Format QR Code tidak valid.";
        // console.error("Parsing Error:", error);
      }
    },
    showResult(parsedResult) {
      Swal.fire({
        title: "Hasil Scan",
        html: `
          <strong>Version\t:</strong> ${parsedResult.version || "Tidak ada"}<br>
          <strong>Type\t:</strong> ${parsedResult.type || "Tidak ada"}<br>
          <strong>Edition\t:</strong> ${parsedResult.edition || "Tidak ada"}<br>
          <strong>Order\t:</strong> ${parsedResult.order || "Tidak ada"}<br>
          <strong>Customer\t:</strong> ${parsedResult.customer || "Tidak ada"}<br>
          <strong>ID\t:</strong> ${parsedResult.id || "Tidak ada"}<br>
          <strong>Reg ID\t:</strong> ${parsedResult.regId || "Tidak ada"}<br>
          <strong>Security\t:</strong> ${parsedResult.security || "Tidak ada"}
        `,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        this.$refs.scannerVideo.insertAdjacentHTML(
          "afterend",
          '<p class="success">Scan berhasil!</p>'
        );
      });;
    },
  },
};
</script>

<style scoped>
@import "/src/assets/scan.css";
</style>
