<template>
  <table>
    <tr>
      <th><input type="checkbox" name="" id="" v-model="selectAll" /></th>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <th>
        <input
          type="checkbox"
          name="maria"
          value="maria"
          id="user"
          v-model="selectedUsers"
        />
      </th>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <th>
        <input
          type="checkbox"
          name="francisco"
          value="francisco"
          id="user"
          v-model="selectedUsers"
        />
      </th>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <th>
        <input
          type="checkbox"
          name="felix"
          value="felix"
          id="user"
          v-model="selectedUsers"
          :disabled="isUserDisabled(userNameTest)"
        />
      </th>
      <td>Plerk</td>
      <td>Felix Anducho__deleted</td>
      <td>Mexico</td>
    </tr>
    {{
      selectedUsers
    }}
  </table>
</template>

<script>
export default {
  data() {
    return {
      selectedUsers: [],
      userNameTest: "Felix Anducho__deleted",
    };
  },
  methods: {
    isUserDisabled(userName) {
      return userName.split("__")[1] === "deleted" ? 1 : 0;
    },
  },
};
</script>

<style></style>
