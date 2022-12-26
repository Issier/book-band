<script>
	import ClubOverview from "./ClubOverview.svelte";
	import CurrentBook from "./CurrentBook.svelte";
	import PreviouslyRead from "./PreviouslyRead.svelte";
	import Votes from "./Votes.svelte";

</script>
<div>
    <div class="flex lg:flex-row flex-col">
        <ClubOverview />
        <CurrentBook />
    </div>
    <div class="flex lg:flex-row flex-col">
        <PreviouslyRead />
        <Votes />
    </div>
</div>
