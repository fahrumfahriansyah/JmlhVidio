//ambil semua elemen vidio
const vidioAll=Array.from(document.querySelectorAll('[data-duration]'))
//pilih hanya javascript lanjutan 
let jsVidio=vidioAll.filter(vidio => vidio.textContent.includes("project"))

//ambil durasi masing masing vidio 
.map(dataD => dataD.dataset.duration)

//ubah durasi menjadidetik
.map(dtk => {

	//"10:09 10,09" split
	const spl=dtk.split(":").map(spli => parseFloat(spli))
	return (spl[0] * 60) + spl[1]
})
	


//jumlahkan detik
.reduce((tmbh,detk) => tmbh+detk);

//ubah formatnya menjadi jam menit dan detik
const jam = Math.floor(jsVidio / 3600)
jsVidio =jsVidio - jam * 3600
const menit = Math.floor(jsVidio / 60)
const detik = jsVidio - menit * 60

//simpan di dom
const jmlhvidio =document.querySelector('.jmlvidio')
let jmlh=vidioAll.filter(vidio => vidio.textContent.includes("project")).length
jmlhvidio.textContent=`project      : ${jmlh} Vidio`
console.log(jmlh)


const waktu =document.querySelector(".berapajam")
    waktu.textContent=`Semua Project: ${jam} jam : ${menit} menit : ${detik} detik`
