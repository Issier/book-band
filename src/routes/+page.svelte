<script>
	import ClubOverview from "./ClubOverview.svelte";
	import CurrentBook from "./CurrentBook.svelte";
	import PreviouslyRead from "./PreviouslyRead.svelte";
	import Votes from "./Votes.svelte";

</script>
<div>
    <div class="flex flex-row">
        <ClubOverview />
        <CurrentBook />
    </div>
    <div class="flex flex-row">
        <PreviouslyRead />
        <Votes />
    </div>
</div>
