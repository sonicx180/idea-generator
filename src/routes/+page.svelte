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
    
<main>

<h1>Idea Generator</h1>

<p> To generate short, random ideas (fictional ones)</p>

<button on:click = {ask} id = "ideabtn"> Click to Generate </button>

<br />


<textarea readonly> {idea} </textarea>


</main>
<style>
  main {
    text-align:center;
  }

  h1 {
    font-size:2.5rem;
  }
  p {
    opacity:0.4;
    margin-bottom:5%;
  }
  textarea {
    width:300px;
    height:100px;
    
  }

  #ideabtn, textarea {
    border-style:none;
  }
  #ideabtn {
    margin-bottom:30px;
    padding:10px;
  }
  #ideabtn:hover {
    background-color: white;
  }
</style>