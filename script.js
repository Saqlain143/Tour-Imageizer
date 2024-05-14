const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("btn")

async function query() {
    image.src = "/loading.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
		{
			headers: { Authorization: "Bearer API_KEY_HERE" },
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click', async function (){
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
        image.src = objectURL
    });
})
