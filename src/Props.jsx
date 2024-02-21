import React from 'react'
import Props_bloglist from './Props_blogList'

const Props = () => {
const blogs =[
{title: "My 1 blog post", body:"aiueo kakikukeko",auther: "Hanako"},
{title: "My 2 blog post", body:"aiueo kakikukeko",auther: "Kenji"},
{title: "My 3 blog post", body:"aiueo kakikukeko",auther: "Akiko"},
{title: "My 4 blog post", body:"aiueo kakikukeko",auther: "Yumiko"},
{title: "My 5 blog post", body:"aiueo kakikukeko",auther: "Mika"},

]

  return (
    <div>
      <Props_bloglist blogsArray={blogs} test ={"This is a blog test"} />

    </div>
  )
}

//rafce
export default Props