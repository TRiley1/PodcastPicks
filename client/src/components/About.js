import { StyledText } from "./StyledComponents";

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <h4>
        Learn about your new favourite app, Podcast Picks, as well as the
        founders and creators: Aneeqa, Lewis and Thomas...
      </h4>
      <div className="about-text-container">
      <StyledText>
        Introducing PodcastPicks, a groundbreaking podcast app crafted with
        passion and expertise by the brilliant trio, Aneeqa, Thomas, and Lewis.
        Together, they embarked on a journey to redefine the podcast listening
        experience, combining their technical prowess and shared love for audio
        content.
      </StyledText>

      <StyledText>
        Aneeqa, a seasoned software engineer, brought her wealth of backend
        knowledge and expertise to PodcastPicks. Her dedication to creating
        scalable and efficient systems ensured that PodcastPicks seamlessly
        handles the vast library of podcasts and delivers them to users without
        a hitch. Her meticulous attention to detail and commitment to
        performance resulted in a fast and reliable app that users can depend
        on.
      </StyledText>
      <StyledText>
        Lewis, a visionary developer with a keen eye for user experience,
        brought his expertise in front-end development and design to the table.
        With a deep understanding of React, he contributed his skills to create
        an intuitive and visually stunning user interface that captivates
        podcast enthusiasts.
      </StyledText>

      <StyledText>
        Thomas, a versatile full-stack developer, lent his expertise in both
        front-end and back-end development to PodcastPicks. With his skills in
        API integration and database management, he ensured that the app
        seamlessly connected with podcast platforms, allowing users to access a
        diverse range of content effortlessly.
      </StyledText>

      <StyledText>
        Together, Aneeqa, Thomas, and Lewis formed a powerhouse team, leveraging
        their collective strengths and collaborative spirit to bring
        PodcastPicks to life. Their shared commitment to delivering an
        exceptional podcast listening experience has resulted in an app that
        strikes the perfect balance between functionality and aesthetics.
      </StyledText>

      <StyledText>
        With PodcastPicks, users can explore an extensive catalog of podcasts,
        discover new favorites, and enjoy a tailored listening experience.
        Whether you're a casual listener, an avid podcast enthusiast, or a
        content creator, PodcastPicks has something for everyone.
      </StyledText>

      <StyledText>
        Driven by their passion for innovation and their dedication to providing
        an outstanding user experience, Aneeqa, Lewis, and Thomas continue to
        evolve PodcastPicks, striving to push the boundaries of what a podcast
        app can achieve. With their combined talent and relentless pursuit of
        excellence, they aim to make PodcastPicks the go-to platform for podcast
        lovers worldwide. Join them on this exciting journey and elevate your
        podcast listening experience with PodcastPicks.
      </StyledText>
      </div>
      <h6>Disclaimer: The text above might not be wholly accurate.</h6>
    </div>
  );
};

export default About;
