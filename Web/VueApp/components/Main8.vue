<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto relative">
      <div
        class="absolute top-2 left-2 w-full h-full bg-accent2 dark:bg-darkAccent2Dark transform -skew-y-2 rounded-lg">
      </div>

      <div class="relative p-6 bg-accent1 dark:bg-darkAccent1Dark rounded-lg shadow-lg">
        <div class="flex justify-between">

          <div class="w-4/5 mb-4">
            <Heading :heading-type="4" :title="'Your Heading'"
              :text="'Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ut eligendi est temporibus exercitationem veritatis adipisci voluptates enim totam commodi recusandae pariatur, quasi similique itaque mollitia eveniet iste ? Sit, quia!'" />
          </div>

          <div class="w-1/5 h-fit flex justify-center m-auto">
            <button
              class="bg-primary1 dark:bg-darkPrimary1Dark text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
              Call to Action
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>