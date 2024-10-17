function tambah() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    // Cek apakah ada input kosong
    if (angka1 === "" || angka2 === "") {
        alert("Mohon masukkan kedua angka!");
        return;
    }

    // Ubah input menjadi angka dan lakukan penjumlahan
    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);
    var hasil = angka1 + angka2;

    // Tampilkan hasil penjumlahan
    document.getElementById("hasil").innerText = "Hasil Penjumlahan: " + hasil;
}
