alert('Selamat datang di Game Suit Jawa Sederhana');

var suit = true;

while (suit) {
  // Menangkap Pilihan Player
  var p = prompt('Pilih : Gajah, Orang, Semut').toLowerCase();

  // Menangkap Pilihan Computer
  var comp = Math.random();
  
  if ( comp <= 0.33) {
    comp = 'gajah';
  }else if ( comp >= 0.34 && comp <= 0.66){
    comp = 'orang';
  }else {
    comp = 'semut';
  }

  // Menentukan Rules
  var hasil = "";

  if ( p == comp ) {
    hasil = 'SERI';
  }else if ( p == 'gajah'){
    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
  }else if ( p == 'orang' ){
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
  }else if ( p == 'semut' ){
    hasil = ( comp == 'gajah' ) ? 'MENANG!' : 'KALAH!';
  }else {
    hasil = "Kamu memasukka pilihan yang salah";
  }

  // Menampilkan Hasil
  alert('Kamu memilih ' + p + ' dan Komputer memilih ' + comp + ' ,hasilnya kamu ' + hasil);

  suit = confirm('Mau coba main lagi?');
}
alert('Terima Kasih sudah mencoba Game Sederhana ini!!!');