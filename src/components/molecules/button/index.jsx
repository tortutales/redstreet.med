import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Link from 'next/link';

const classesMapper = {
  primary: styles['button--primary'],
  secondary: styles['button--secondary'],
  link: styles['button--link'],
};

const mapVariantToClass = (variant) => classesMapper[variant];

const Button = ({
  children,
  className,
  href,
  onClick,
  variant,
}) => {
  const props = {
    className: `${styles.button} ${mapVariantToClass(variant)} ${mapVariantToClass('link')} ${className}`,
  };

  if (href) {
    return (
      <Link href={href}>
        <a {...props} target="_blank">
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  onClick: Function.prototype,
  variant: 'primary',
}

export default Button;
