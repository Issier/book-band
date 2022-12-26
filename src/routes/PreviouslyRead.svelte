<script>
    let prevRead = [
        {source: "invis.jpg", title: "Invis", rating: 3.2},
        {source: "invis.jpg", title: "Invis", rating: 6.2},
        {source: "invis.jpg", title: "Invis", rating: 8.2},
    ]

    const getRatingColor = (/** @type {number} */ rating) => {
        if (rating < 5.0) {
            return "text-red-600"
        } else if (rating < 7.0) {
            return "text-yellow-600"
        } else {
            return "text-green-600"
        }
    }
</script>

<div class="basis-2/3 bg-slate-200 pb-10">
    <h1 class="text-4xl p-10 pt-5">Previously Read</h1>
    <div class="flex flex-row gap-x-12 justify-evenly">
        {#each prevRead as read}
        <div>
            <img src={read.source} alt={read.title} />
            <p class="text-center text-lg pt-2 {getRatingColor(read.rating)}">Rating: {read.rating}</p>
        </div>
        {/each}
    </div>
</div>