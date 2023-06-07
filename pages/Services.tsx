import React, { useState } from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";

const Services = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
    <Layout setSelectedPage={setSelectedPage}>
        <div>
            <h1>hello</h1>
        </div>
    </Layout>
  )
}

export default Services