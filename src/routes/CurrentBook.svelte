<script>
    let bookTitle = "Invisible Women"
    let description = "This is where the description will go. Lorem ipsum dolor sit amit" 
    let startDate = new Date('2022-8-12')
    let endDate = new Date('2022-8-21')
    let startChapter = 3
    let endChapter = 6
</script>

<div class="basis-1/2">
    <h1 class="text-4xl p-10 pt-5">Currently Reading: <br /><span class="text-3xl">{bookTitle}</span></h1>
    <div class="flex flew-row">
        <img class="pl-10" src="invis.jpg" alt="book cover">
        <p class="text-xl pl-5 pr-10">{description}</p>
    </div>
    <h2 class="text-2xl pl-10 pt-5">Current Session</h2>
    <div class="flex flow-row">
        <p class="pl-10 pt-5">Start Date: {startDate.toLocaleDateString("en-US")}</p>
        <p class="pl-10 pt-5">End Date: {endDate.toLocaleDateString("en-US")}</p>
        <p class="pl-10 pt-5">Chapters: {startChapter} to {endChapter}</p>
    </div>
</div>