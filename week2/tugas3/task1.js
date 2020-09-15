const cekHariKerja = (day) =>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const dataDay=['senin', 'selasa', 'rabu', 'kamis', 'jumat']
			let cek = dataDay.find((item)=>{
				return item === day
		})
		if (cek) {
			resolve(cek)
		}else{
			reject(new Error('hari ini bukan hari kerja'))
		}
	}, 3000)
})
}



cekHariKerja('senin')
.then((result)=>{
	console.log('hari ini adalah hari',result)
})
.catch((error)=>{
	console.log(error.message)
})



// const hariKerja = async() =>{
// 	try{
// 		let result = await cekHariKerja('senin')
// 		console.log('hari ini adalah',result)
// 	}catch (error){
// 		console.log(error.message)
// 	}finally{
// 		console.log('selesai')
// 	}
// }
// hariKerja()

//penjelasan
////then catch dan try catch sama sama memiliki fungsi untuk mengolah hasil sukses dan gagal.
// dan memudahkan kita dalam proses debugging dan menangani kesalahan pada program
//tetapi try-catch itu biasanya untuk proses synchronous
