import PropTypes from 'prop-types';

const Card = ({image, title, role, description}) => {
  return (
    <section className="experience_section">
        <div className="logo">
            <img src={image} alt={title} id="card-img" />
        </div>
        <section>
          <h2>{title}</h2>
          <h4>{role}</h4>
          <p>{description}</p>
        </section>
    </section>
  )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Card