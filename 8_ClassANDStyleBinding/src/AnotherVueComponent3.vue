<template setup>
  <h1 class="class-CFAVF3">
    Component from Another Vue File3, No style added to us because more than 1
    root present
  </h1>
  <h1 class="class-CFAVF3" :class="$attrs.class">
    Component from Another Vue File3, Style added to me because here we use $attrs,
    <p>:class="$attrs.class</p>
  </h1>
</template>
