<template>
  <div class="max-w-xl m-auto mt-12 mb-12 font-sans">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-for="(field, index) in formData" :key="index" class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-sans"
          :for="field.id"
        >
          {{ field.label }}
        </label>
        <input
          class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :id="field.id"
          type="text"
          :placeholder="field.placeholder"
          v-model="field.value"
        />
        <p class="text-xs leading-snug text-gray-600" v-if="field.helperText">
          {{ field.helperText }}
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy; CreativeMornings Buf
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      formData: {
        name: {
          id: "name",
          label: "What's your name?",
          placeholder: "What's your name?",
          helperText: "",
          value: ""
        },
        profession: {
          id: "profession",
          label: "What one or two words describe you or what you do?",
          placeholder: "What one or two words describe you or what you do?",
          helperText:
            "We'll use this to get the word out about your talk. i.e.  Violinist, Designer, Biologist, Cultural Advocate.",
          value: ""
        },
        email: {
          id: "email",
          label: "How about your email?",
          placeholder: "How about your email?",
          helperText: "",
          value: ""
        },
        bio: {
          id: "bio",
          label: "Tell us a little about yourself!",
          placeholder: "Tell us a little about yourself!",
          helperText:
            "Need inspiration for a bio? Check out the style our past speakers have used: https://creativemornings.com/cities/buf/talks",
          value: ""
        },
        social: {
          id: "social",
          label:
            "Have any social media handles? Tell us what they are so we can tag you!",
          placeholder:
            "Have any social media handles? Tell us what they are so we can tag you!",
          helperText: "Facebook, Twitter, Instagram!",
          value: ""
        },
        phone: {
          id: "phone",
          label: "Can we get your phone number?",
          placeholder: "Can we get your phone number?",
          helperText: "",
          value: ""
        },
        month: {
          id: "month",
          label: "What month are you speaking?",
          placeholder: "What month are you speaking?",
          helperText: "",
          value: ""
        },
        address: {
          id: "address",
          label: "Last but not least, can we get a preferred address for you?",
          placeholder:
            "Last but not least, can we get a preferred address for you?",
          helperText: "",
          value: ""
        }
      }
    };
  },
  computed: {
    message() {
      let arr = [];
      Object.keys(this.formData).forEach(idx => {
        arr.push({
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              "*" + this.formData[idx].label + "* \n" + this.formData[idx].value
          }
        });
      });
      let obj = {
        blocks: arr
      };
      return obj;
    }
  },
  methods: {}
};
</script>
