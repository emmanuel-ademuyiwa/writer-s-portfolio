import React from 'react'
import Layout from '../components/Layout'
import img from '../assets/img.jpeg'

const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="title">
          <h1>About Mojisola</h1>
          <div className="aboutBody">
            <div className="imgContainer">
              <img src={img} alt="" />
            </div>
            <div className="textCon">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat mauris ac egestas dapibus. Vestibulum in augue
                aliquam, rutrum massa quis, elementum turpis. Vivamus nec metus
                nec lacus ornare ultricies at vitae nulla. Donec tristique
                sapien dui, ut lacinia sem finibus ornare. Aliquam vitae velit
                tortor.
              </p>
              <p>
                Etiam ultrices pretium lorem, laoreet rhoncus dui pharetra
                viverra. Proin augue massa, vulputate a risus id, finibus
                eleifend nulla. Etiam molestie lorem ac diam viverra porttitor.
                Maecenas egestas massa arcu, eu tristique est vestibulum id.
              </p>
              <p>
                Aliquam nibh ante, posuere in nibh ut, bibendum vulputate risus.
                Aliquam sit amet volutpat turpis. Proin a sagittis tortor.
                Suspendisse aliquam eu tellus eget tincidunt. Phasellus
                ultricies libero a urna congue, eget malesuada magna ultrices.
              </p>
              <p>
                Mauris congue vestibulum lorem a dictum. Sed mauris risus,
                fringilla quis orci ut, venenatis tristique elit. Nunc sagittis
                sit amet lectus sed tempus. Nunc sed lorem vestibulum, sodales
                lectus at, viverra nulla.
              </p>
              <p>
                Maecenas eu lectus eget mi vulputate varius ut a nisl. Aenean
                eleifend molestie molestie. Ut in consequat leo. Curabitur eget
                ullamcorper velit. Donec sit amet lorem eget orci blandit
                ullamcorper.
              </p>
              <p>
                Proin eu neque leo. Nam nibh neque, fringilla nec neque vitae,
                hendrerit lacinia mauris. Pellentesque sodales dolor sit amet
                leo volutpat ultrices. Maecenas purus nibh, pellentesque
                tincidunt dui eu, pulvinar interdum justo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About