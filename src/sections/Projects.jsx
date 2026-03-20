import React, { useMemo, useState } from "react";

export default function Projects({ data }) {
  const featuredProject = data.projects.find((project) => project.featured);
  const otherProjects = data.projects.filter((project) => !project.featured);

  const [activeModal, setActiveModal] = useState(null);
  const [activeIndexes, setActiveIndexes] = useState({});

  const projectKey = (project) => project.id || project.title;

  const getActiveIndex = (project) => {
    const key = projectKey(project);
    return activeIndexes[key] ?? 0;
  };

  const getImages = (project) => {
    if (project.images?.length) return project.images;
    return [];
  };

  const handlePrev = (project) => {
    const images = getImages(project);
    if (!images.length) return;

    const key = projectKey(project);
    const current = getActiveIndex(project);
    const nextIndex = (current - 1 + images.length) % images.length;

    setActiveIndexes((prev) => ({
      ...prev,
      [key]: nextIndex,
    }));
  };

  const handleNext = (project) => {
    const images = getImages(project);
    if (!images.length) return;

    const key = projectKey(project);
    const current = getActiveIndex(project);
    const nextIndex = (current + 1) % images.length;

    setActiveIndexes((prev) => ({
      ...prev,
      [key]: nextIndex,
    }));
  };

  const openModal = (project, index = 0) => {
    setActiveModal({
      project,
      index,
    });
  };

  const closeModal = () => setActiveModal(null);

  const modalImages = useMemo(() => {
    if (!activeModal?.project) return [];
    return getImages(activeModal.project);
  }, [activeModal]);

  const modalPrev = () => {
    if (!activeModal || !modalImages.length) return;

    setActiveModal((prev) => ({
      ...prev,
      index: (prev.index - 1 + modalImages.length) % modalImages.length,
    }));
  };

  const modalNext = () => {
    if (!activeModal || !modalImages.length) return;

    setActiveModal((prev) => ({
      ...prev,
      index: (prev.index + 1) % modalImages.length,
    }));
  };

  const renderPreview = (project, isFeatured = false) => {
    const images = getImages(project);
    const currentIndex = getActiveIndex(project);
    const currentImage = images[currentIndex];

    if (!images.length) {
      return (
        <div className={`project-placeholder ${!isFeatured ? "small" : ""}`}>
          <span>{project.title}</span>
        </div>
      );
    }

    return (
      <div className="project-carousel">
        <button
          type="button"
          className="project-carousel-btn prev"
          onClick={() => handlePrev(project)}
          aria-label={`Previous image for ${project.title}`}
        >
          ‹
        </button>

        <button
          type="button"
          className="project-carousel-image-wrap"
          onClick={() => openModal(project, currentIndex)}
          aria-label={`Open preview for ${project.title}`}
        >
          <img
            src={currentImage}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="project-preview-image"
          />
        </button>

        <button
          type="button"
          className="project-carousel-btn next"
          onClick={() => handleNext(project)}
          aria-label={`Next image for ${project.title}`}
        >
          ›
        </button>

        {images.length > 1 && (
          <div className="project-carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`project-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIndexes((prev) => ({
                    ...prev,
                    [projectKey(project)]: index,
                  }))
                }
                aria-label={`Go to screenshot ${index + 1} for ${
                  project.title
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Selected work and business systems I’ve built.</p>
          </div>

          {featuredProject && (
            <div className="featured-project-card">
              <div className="featured-project-content">
                <h3>{featuredProject.title}</h3>
                <p className="project-description">
                  {featuredProject.description}
                </p>
                <span className="project-badge">Key System Features</span>
                {featuredProject.highlights?.length > 0 && (
                  <ul className="project-highlights">
                    {featuredProject.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tech">
                  {featuredProject.tech.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {featuredProject.links?.demo &&
                    featuredProject.links.demo !== "#" && (
                      <a
                        href={featuredProject.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn primary"
                      >
                        Live Demo
                      </a>
                    )}

                  {featuredProject.links?.repo && (
                    <a
                      href={featuredProject.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn secondary"
                    >
                      View Repository
                    </a>
                  )}

                  {(!featuredProject.links?.demo ||
                    featuredProject.links.demo === "#") &&
                    !featuredProject.links?.repo && (
                      <span className="project-note">
                        Private / available upon request
                      </span>
                    )}
                </div>
              </div>

              <div className="featured-project-preview">
                {renderPreview(featuredProject, true)}
              </div>
            </div>
          )}

          <div className="projects-grid upgraded">
            {otherProjects.map((project) => (
              <article className="project-card upgraded" key={project.id}>
                <div className="project-card-media">
                  {renderPreview(project, false)}
                </div>

                <div className="project-card-body">
                  <div className="project-card-top">
                    <h3>{project.title}</h3>
                    {project.featured && (
                      <span className="project-badge small">Featured</span>
                    )}
                  </div>

                  <p className="project-description">{project.description}</p>
                  <span className="project-badge">Key System Features</span>

                  {project.highlights?.length > 0 && (
                    <ul className="project-highlights compact">
                      {project.highlights
                        .slice(0, 3)
                        .map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                  )}

                  <div className="project-tech">
                    {project.tech.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.links?.demo && project.links.demo !== "#" && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn primary"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.links?.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn secondary"
                      >
                        Repository
                      </a>
                    )}

                    {(!project.links?.demo || project.links.demo === "#") &&
                      !project.links?.repo && (
                        <span className="project-note">Private project</span>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeModal && modalImages.length > 0 && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeModal.project.title} preview`}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close preview"
            >
              ×
            </button>

            <div className="project-modal-header">
              <h3>{activeModal.project.title}</h3>
              <p>
                Image {activeModal.index + 1} of {modalImages.length}
              </p>
            </div>

            <div className="project-modal-body">
              {modalImages.length > 1 && (
                <button
                  type="button"
                  className="project-modal-nav prev"
                  onClick={modalPrev}
                  aria-label="Previous preview image"
                >
                  ‹
                </button>
              )}

              <img
                src={modalImages[activeModal.index]}
                alt={`${activeModal.project.title} preview ${
                  activeModal.index + 1
                }`}
                className="project-modal-image"
              />

              {modalImages.length > 1 && (
                <button
                  type="button"
                  className="project-modal-nav next"
                  onClick={modalNext}
                  aria-label="Next preview image"
                >
                  ›
                </button>
              )}
            </div>

            {modalImages.length > 1 && (
              <div className="project-modal-dots">
                {modalImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`project-dot ${
                      index === activeModal.index ? "active" : ""
                    }`}
                    onClick={() =>
                      setActiveModal((prev) => ({
                        ...prev,
                        index,
                      }))
                    }
                    aria-label={`Go to preview image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
