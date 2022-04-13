<h1>
  <slot />
</h1>

<style lang="sass">
  h1
    font-size: 3.75rem
    font-weight: 700
    line-height: 60px

    @media screen and (max-width: 1180px)
      font-size: 3rem
      line-height: 45px

    @media screen and (max-width: 768px)
      font-size: 2.25rem
      line-height: 35px
</style>
