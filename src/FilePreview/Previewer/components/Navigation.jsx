import React from 'react';
import PropTypes from 'prop-types';

export const CustomPrevButton = props => {
  const { page, handlePrevClick } = props;
  if (page === 1) return <div />;

  return (
    <h3
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        marginRight: 24,
        marginTop: 0,
      }}
      onClick={handlePrevClick}
    >
      Previous page
    </h3>
  );
};
CustomPrevButton.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
};

export const CustomNextButton = props => {
  const { page, pages, handleNextClick } = props;
  if (page === pages) return <div />;

  return (
    <h3
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        marginLeft: 24,
        marginTop: 0,
      }}
      onClick={handleNextClick}
    >
      Next page
    </h3>
  );
};
CustomNextButton.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

const CustomNavigation = props => {
  const { page, pages } = props;

  const {
    handlePrevClick,
    handleNextClick,
    handleZoomIn,
    handleResetZoom,
    handleZoomOut,
  } = props;

  return (
    <div className="customWrapper">
      <button onClick={handleZoomOut}>-</button>
      <button onClick={handleResetZoom}>reset</button>
      <button onClick={handleZoomIn}>+</button>
      <div>
        <CustomPrevButton
          page={page}
          pages={pages}
          handlePrevClick={handlePrevClick}
        />
        <h3 style={{ display: 'inline-block', marginTop: 0 }}>
          Page {page} from {pages}
        </h3>
        <CustomNextButton
          page={page}
          pages={pages}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};
CustomNavigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default CustomNavigation;
