<script>
    let voteCandidates = [
        {source: "invis.jpg", title: "Invis"},
        {source: "invis.jpg", title: "Invis"},
        {source: "invis.jpg", title: "Invis"},
    ]
</script>
<div class="bg-slate-300 basis-1/2 border-2 border-bb-blue">
    <p class="text-4xl p-10 pt-5">Next Session Vote</p>
    <div class="flex flex-row justify-evenly pb-10">
        {#each voteCandidates as candidate}
            <img src={candidate.source} alt={candidate.title} />
        {/each}
    </div>
</div>