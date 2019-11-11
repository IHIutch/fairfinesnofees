<template>
  <div class="max-w-xl m-auto mt-12 mb-12 font-sans">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
      <h1 class="text-4xl text-gray-800">Thank You!</h1>
      <p class="text-gray-700 mb-8">
        Your submission helps members of your community by creating a shared
        awareness for issues in our community and amplify our voices to affect
        change.
      </p>
      <p class="text-gray-700 mb-4">
        Stay up to date with the Fair Fines &amp; Feeds Coalition on social
        media:
      </p>
      <div class="flex justify-center">
        <a
          href="https://www.facebook.com/FairFinesFeesBuffalo/"
          class="bg-blue-100 p-2 flex items-center text-blue-700 rounded-sm hover:bg-blue-200 hover:text-blue-900 transition-fast mr-4"
        >
          <FacebookIcon size="1.25x" class="mr-2" />
          <span>Facebook</span>
        </a>
        <a
          href="https://twitter.com/FairFinesBflo"
          class="bg-blue-100 p-2 flex items-center text-blue-700 rounded-sm hover:bg-blue-200 hover:text-blue-900 transition-fast"
        >
          <TwitterIcon size="1.25x" class="mr-2" />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { FacebookIcon, TwitterIcon } from "vue-feather-icons";

export default {
  name: "ThankYou",
  components: {
    FacebookIcon,
    TwitterIcon
  }
};
</script>
