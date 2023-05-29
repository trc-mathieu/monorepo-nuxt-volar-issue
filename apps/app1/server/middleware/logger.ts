export default defineEventHandler((event) => {
  console.log(`[api] New request: ${getRequestURL(event)}`)
})
