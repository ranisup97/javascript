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

cekHariKerja()
.then((result)=>{
	console.log(result)
}).catch((error)=>{
	console.log(error.message)
})
