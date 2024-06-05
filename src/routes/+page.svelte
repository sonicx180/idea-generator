<script>
   let idea = "";
   
   async function ask () {
    let res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
        "Content-Type":"application/json"
      }
    })
    res = await res.json()
    idea = res.message
   }
</script>
    

<h1>Idea Generator</h1>

<p> To generate short, random ideas</p>

<button on:click = {ask}> Click to Generate </button>

<input value = {idea} readonly/>


<style>

</style>