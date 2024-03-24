import { useEffect, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'

import getFlipProperties from 'lib/flip'
import TechStack from 'components/tech-stack'
import { H3, P } from 'components/typography'
import { useOnClickOutside } from 'usehooks-ts'
import projects from 'lib/copy/projects'
import Modal from 'components/modal'

// todo lift up logic! to projects component into hook
const ProjectsModal = ({ handleClose, imgRef, projectId, modalRef }) => {
  // console.log('ID', projectId)
  // const modalRef = useRef<HTMLDialogElement>(null)
  const projectData = projects[projectId]
  // const { title, text, imgSrc, githubLink, projectLink, stack } = projectData

  // const handleClick = () => {
  //   if (!projectRef.current || !imgRef.current) return

  //   handleChangeActiveProject(null)

  //   const prevRect = imgRef.current.getBoundingClientRect()
  //   const finalRect = projectRef.current?.getBoundingClientRect()!

  //   console.log('MODAL', 'prev(img)', prevRect, 'final(cell)', finalRect)

  //   // console.log('PREV', prevRect, 'FINAL', finalRect)

  //   if (modalRef.current) modalRef.current.style.display = 'none'

  //   const { transforms, options } = getFlipProperties({
  //     prevRect,
  //     finalRect,
  //   })

  //   projectRef.current.animate(transforms, options)
  //   modalRef.current?.close()
  // }

  useOnClickOutside(modalRef, handleClose)

  return (
    <div className='projectsModal' ref={modalRef}>
      <div className='projectsModal__grid'>
        <img ref={imgRef} src={projectData?.imgSrc} alt='projectImg' className='projectsModal__img' />
        <H3>{projectData?.title}</H3>
        <P className='projectsModal__body'>{projectData?.text}</P>
        <TechStack className='projectsModal__stack' techStack={projectData?.stack} githubLink={projectData?.githubLink} projectLink={projectData?.projectLink} />
      </div>
    </div>
  )
}

export default ProjectsModal
