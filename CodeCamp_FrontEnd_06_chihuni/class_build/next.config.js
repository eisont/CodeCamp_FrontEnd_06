/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "chihun",
  exportPathMap: () => ({
    "/": {page: "/"},
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
    // 이렇게 적어야 build:ssg가 실행이 된다.
  })
}

module.exports = nextConfig
