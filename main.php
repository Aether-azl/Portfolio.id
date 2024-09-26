<?php
// Ambil data dari form
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

// Konfigurasi email
$to = "email_penerima@example.com"; // Ganti dengan email tujuan
$subject = "Pesan dari website";
$message = "Nama: $nama\nEmail: $email\n\nPesan:\n$pesan";
$headers = "From: $email";

// Kirim email
if (mail($to, $subject, $message, $headers)) {
    echo "Pesan berhasil terkirim!";
} else {
    echo "Terjadi kesalahan saat mengirim pesan.";
}
?>