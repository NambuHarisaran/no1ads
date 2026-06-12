import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', color, shineColor }) => {
  const animationDuration = `${speed}s`;

  const style = { animationDuration };
  if (color || shineColor) {
    const base = color || '#b5b5b5a4';
    const shine = shineColor || '#ffffff';
    style.backgroundImage = `linear-gradient(120deg, ${base} 40%, ${shine} 50%, ${base} 60%)`;
    style.color = 'transparent';
  }

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={style}>
      {text}
    </div>
  );
};

export default ShinyText;
