import ShowBlogs from "./components/ShowBlog"
import AddBlog from "./components/AddBlog"
import SingleBlog from "./components/SingleBlog"

export default [
    { path: "/", component: ShowBlogs },
    { path: "/add", component: AddBlog },
    { path: "/blog/:id", component: SingleBlog },
]
//:id   id代表参数  与SingleBlog.vue中的created中的id相同