<template>
  <div class="max-w-xl m-auto mt-12 mb-12 font-sans">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-8">
        <h1 class="text-4xl text-gray-800">Traffic Stop Form</h1>
        <p class="text-gray-700">
          We understand the sensitivity of the information being collected,
          therefore your submission will be completely anonymous unless you
          choose otherwise.
        </p>
      </div>
      <div class="mb-4">
        <span class="block text-gray-700 text-sm font-bold mb-2">
          {{ form.contact.text }}
        </span>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.contact.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="radio"
              v-model="form.contact.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div v-if="form.contact.value" class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.wayToContact.id"
        >
          {{ form.wayToContact.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.wayToContact.id"
          type="text"
          v-model="form.wayToContact.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.located.id"
        >
          {{ form.located.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.located.id"
          type="text"
          v-model="form.located.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.date.id"
        >
          {{ form.date.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.date.id"
          type="date"
          v-model="form.date.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.time.id"
        >
          {{ form.time.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.time.id"
          type="time"
          v-model="form.time.value"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.reason.id"
        >
          {{ form.reason.text }}
        </label>
        <textarea
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.reason.id"
          v-model="form.reason.value"
          rows="3"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.interaction.id"
        >
          {{ form.interaction.text }}
        </label>
        <textarea
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.interaction.id"
          v-model="form.interaction.value"
          rows="6"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.age.id"
        >
          {{ form.age.text }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.age.id"
          type="number"
          v-model="form.age.value"
        />
      </div>
      <div class="mb-4">
        <div class="mb-2">
          <span class="block text-gray-700 text-sm font-bold">
            {{ form.race.text }}
          </span>
          <span class="text-sm leading-snug text-gray-600">
            {{ form.race.helpText }}
          </span>
        </div>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.race.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="checkbox"
              v-model="form.race.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <div class="mb-2">
          <span class="block text-gray-700 text-sm font-bold">
            {{ form.genderSexuality.text }}
          </span>
          <span class="text-sm leading-snug text-gray-600">
            {{ form.genderSexuality.helpText }}
          </span>
        </div>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.genderSexuality.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="checkbox"
              v-model="form.genderSexuality.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <div class="mb-2">
          <span class="block text-gray-700 text-sm font-bold">
            {{ form.communities.text }}
          </span>
          <span class="text-sm leading-snug text-gray-600">
            {{ form.genderSexuality.helpText }}
          </span>
        </div>
        <div class="mt-2">
          <label
            v-for="(option, idx) in form.communities.options"
            :key="idx"
            class="inline-flex items-center mr-6"
          >
            <input
              type="checkbox"
              v-model="form.communities.value"
              :value="option.value"
            />
            <span class="ml-2 text-gray-800">{{ option.text }}</span>
          </label>
        </div>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          :for="form.additional.id"
        >
          {{ form.additional.text }}
        </label>
        <textarea
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="form.additional.id"
          v-model="form.additional.value"
          rows="3"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="submitData"
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
  name: "Home",
  metaInfo: {
    title: "Traffic Stop Form"
  },
  data() {
    return {
      db: {},
      form: {
        contact: {
          id: "contact",
          text:
            "Can the Fair, Fines, and Fees Coalition contact you about your experience?",
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
        wayToContact: {
          id: "wayToContact",
          text: "Please provide the best way for us to reach you.",
          value: ""
        },
        located: {
          id: "located",
          text: "Where were you located when you were pulled over?",
          value: ""
        },
        date: {
          id: "date",
          text: "What was the date you were pulled over?",
          value: ""
        },
        time: {
          id: "time",
          text: "What was the approximate time you were pulled over?",
          value: ""
        },
        reason: {
          id: "reason",
          text:
            "To the best of your knowledge, what was the reason you were pulled over?",
          value: ""
        },
        interaction: {
          id: "interaction",
          text: "Please describe your interaction with the police:",
          value: ""
        },
        age: {
          id: "age",
          text: "What is your age?",
          value: ""
        },
        race: {
          id: "race",
          text: "Which of the following best describes your race?",
          helpText: "Select all that apply",
          options: [
            {
              text: "Asian",
              value: "asian"
            },
            {
              text: "African American/Black",
              value: "african american"
            },
            {
              text: "Caucasian/White",
              value: "caucasian"
            },
            {
              text: "Latinx",
              value: "latinx"
            },
            {
              text: "Native American",
              value: "native american"
            },
            {
              text: "Pacific Islander",
              value: "pacific islander"
            },
            {
              text: "Other",
              value: "other"
            },
            {
              text: "Prefer Not To Say",
              value: "prefer not to say"
            }
          ],
          value: []
        },
        communities: {
          id: "communities",
          text: "Are you a member of any of the following communities?",
          helpText: "Select all that apply",
          options: [
            {
              text: "Refugee",
              value: "refugee"
            },
            {
              text: "Immigrant",
              value: "immigrant"
            },
            {
              text: "Person of Color",
              value: "person of color"
            },
            {
              text: "None of the above apply to me",
              value: "n/a"
            }
          ],
          value: []
        },
        genderSexuality: {
          id: "genderSexuality",
          text: "Which of the following best describe you?",
          helpText: "Select all that apply",
          options: [
            {
              text: "Transgender",
              value: "transgender"
            },
            {
              text: "Cisgender",
              helpText:
                "(Gender identity corresponds with your assigned sex at birth)",
              value: "cisgender"
            },
            {
              text: "Non-binary",
              value: "non-binary"
            },
            {
              text: "Queer",
              value: "queer"
            },
            {
              text: "Heterosexual",
              value: "heterosexual"
            },
            {
              text: "Homosexual",
              value: "homosexual"
            },
            {
              text: "Bi/Pansexual",
              value: "bi or pansexual"
            },
            {
              text: "Asexual",
              value: "asexual"
            },
            {
              text: "Other",
              value: "other"
            },
            {
              text: "Prefer Not To Say",
              value: "prefer not to say"
            }
          ],
          value: []
        },
        additional: {
          id: "additional",
          text:
            "Is there any additional information about your experience you want to record?",
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
        path: "/thank-you"
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
            sheetName: "Traffic Stop Form"
          })
        }
      ).then(() => {
        this.toThankYou();
      });
    }
  }
};
</script>
