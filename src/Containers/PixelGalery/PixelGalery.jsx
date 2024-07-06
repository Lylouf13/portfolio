import { React, useState }  from 'react'

import ImageViewer from '../../Components/ImageViewer/ImageViewer'
import PixelGrid from '../PixelGrid/PixelGrid'

export default function PixelGalery() {

    const [viewerOpen, setViewerOpen] = useState(false)
    const [focusImage, setFocusImage] = useState(null)
    const [focusTitle, setFocusTitle] = useState(null)

    function closeViewer(){
      setViewerOpen(false)
    }
    function setViewer(image,title,open){
      setFocusImage(image)
      setFocusTitle(title)
      setViewerOpen(open)
    }

  return (
    <section>
      <ImageViewer open={viewerOpen} image={focusImage} title={focusTitle} closeViewer={closeViewer} />
      <PixelGrid usable={viewerOpen} setViewer={setViewer} type={'static'} />
      <PixelGrid usable={viewerOpen} setViewer={setViewer} type={'anim'} />
    </section>

  )
}
