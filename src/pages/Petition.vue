<template>
  <div class="max-w-xl m-auto mt-12 mb-12 font-sans">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-8">
        <h1 class="text-4xl text-gray-800">Fair, Fines, and Fees Petition</h1>
      </div>
      <div class="mb-4">
        <span class="block text-gray-700 text-sm font-bold mb-2">
          {{ form.repeal.text }}
        </span>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.repeal.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              v-model="form.repeal.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <span class="block text-gray-700 text-sm font-bold mb-2">
          {{ form.stop.text }}
        </span>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.stop.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              v-model="form.stop.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <span class="block text-gray-700 text-sm font-bold mb-2">
          {{ form.fixit.text }}
        </span>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.fixit.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              v-model="form.fixit.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.name.id"
        >
          {{ form.name.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.name.id"
          type="text"
          v-model="form.name.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.zip.id"
        >
          {{ form.zip.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.zip.id"
          type="number"
          v-model="form.zip.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.streetName.id"
        >
          {{ form.streetName.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.streetName.id"
          type="text"
          v-model="form.streetName.value"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="submitData()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-sm">
      &copy; 2019 Fair Fines &amp; Fees Coalition, Buffalo NY
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SignOnForm",
  data() {
    return {
      db: {},
      form: {
        repeal: {
          id: "repeal",
          text:
            "I support legislation to eliminate the 13 new fees and remove any outstanding traffic debt incurred as a result",
          options: [
            {
              text: "Yes",
              value: true
            },
            {
              text: "No",
              value: false
            }
          ],
          value: ""
        },
        stop: {
          id: "stop",
          text:
            "I support legislation to require the City of Buffalo and the Buffalo Police Department to collect traffic stop data that includes race and location.",
          options: [
            {
              text: "Yes",
              value: true
            },
            {
              text: "No",
              value: false
            }
          ],
          value: ""
        },
        fixit: {
          id: "fixit",
          text:
            "I support legislation to require the Buffalo Police Department to issue Fix-it Tickets that allow a grace period of 14 days or more for correctable violations.",
          options: [
            {
              text: "Yes",
              value: true
            },
            {
              text: "No",
              value: false
            }
          ],
          value: ""
        },
        name: {
          text: "What is your name?",
          value: ""
        },
        zip: {
          text: "What is your zip code?",
          value: ""
        },
        streetName: {
          text: "What is your street name?",
          value: ""
        }
      }
    };
  },
  computed: {
    fetchData() {
      return Object.keys(this.form).map(key => {
        return Array.isArray(this.form[key].value)
          ? JSON.stringify(this.form[key].value)
          : this.form[key].value;
      });
    }
  },
  methods: {
    toThankYou() {
      this.$router.push({
        name: "ThankYou"
      });
    },
    submitData() {
      this.isSaving = true;
      this.doFetch();
    },
    doFetch() {
      fetch(
        "https://script.google.com/macros/s/AKfycbzioe1Q49scDcGifK7PvWlNL4f_rVXJxdlTWofFanUGVos7lYsB/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          body: JSON.stringify({
            details: this.fetchData,
            sheetName: "Petition"
          })
        }
      ).then(() => {
        this.toThankYou();
      });
    }
  }
};
</script>
