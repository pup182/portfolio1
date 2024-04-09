export function ContactMe() {
  return (
    <section id="contact-me">
      <div class="section-title">
        <h1>Contact me</h1>
      </div>
      <div class="contact-info">
        <div class="email">
          <i className="fas fa-envelope"></i>
          <a href="mailto:louisdaltonmoore@gmail.com">
            louisdaltonmoore@gmail.com
          </a>
        </div>
        <div class="linkedin">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/louis-dalton-moore/"
              id="profile-link"
              target="_blank"
            >
              My LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
