import React from 'react'
// note 1: import noteContext from '../context/notes/noteContext'

const About = () => {
  // note1: const a = useContext(noteContext)
  /* note 1: useEffect(() => {
    a.update();
  // eslint-disable-next-line 
  }, [])
  */

  return (
    <div>
      {/* note 1: This is About {a.state.name} and he is in class {a.state.class}  */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About Sanam Shrestha
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Sanam Shrestha is a self learnt programmer. He learnt programmer with the help of youtube. He learnt React Js with MongoDb. He is now a full stack web developer. He is developing his own projects.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Want to Learn and Earn
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              If you want to learn web development using React Js. Mr. Sanam is a good tutor. He teaches well in a well understanding way. If you want to learn with Mr.Sanam Shrestha then you can contact him at shresthasanam480@gmail.com or call at +977-9860934475.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Let's blow the horn
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              In this modern age of information and technology, you should learn programming. Programming is now the best way to get you known for your work.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
