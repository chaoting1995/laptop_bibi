import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
// import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 260,
    width: '100px' + theme.spacing(2) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };

const IOSSlider = withStyles({
  root: {
    color: '#000000',
    height: 4,
    padding: '15px 0',
  },
  thumb: {
    top: 14,
    margin: '-10 0 0 -10',
    border: 'solid 4px #000',
    backgroundColor: '#000',
    height: 16,
    width: 16,
    // '&:focus, &:hover, &$active': {
    //   boxShadow:
    //     '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    //   // Reset on touch devices, it doesn't add specificity
    //   '@media (hover: none)': {
    //     // boxShadow: iOSBoxShadow,
    //   },
    // },
  },
  active: {},
  valueLabel: {
    right: 'calc(-50%)',
    top: 24,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
    padding: 0,
  },
  track: {
    height: 3,
    background: '#505050',
  },
  //   rail: {
  //     height: 2,
  //     opacity: 0.5,
  //     backgroundColor: '#bfbfbf',
  //   },
  rail: {
    height: 3,
    borderRadius: 4,
    backgroundColor: '#464646',
  },
  //   mark: {
  //     backgroundColor: '#bfbfbf',
  //     height: 8,
  //     width: 1,
  //     marginTop: -3,
  //   },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

// export default function CustomizedSlider(props) {
export default function ProductListFWPriceSlider(props) {
  const { priceRange, setPriceRange, setPriceStart, setPriceEnd } = props;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    // setPriceStart(priceRange[0]);
    // setPriceEnd(priceRange[1]);
  };

  return (
    <div className={classes.root}>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={[10000, 80000]}
        valueLabelDisplay="on"
        min={0}
        max={100000}
        onChange={handleChange}
        // value={priceRange}

        // onDragStop={ (e) => this.props.update(e, control.id, this.val)}
      />

      <div className={classes.margin} />
    </div>
  );
}
