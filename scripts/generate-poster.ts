import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";

if (!ffmpegPath) {
  throw new Error("FFmpeg não encontrado");
}

ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg("public/v1.mp4").screenshots({
  timestamps: ["0"],
  filename: "hero-poster.jpg",
  folder: "public",
});