import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-circle-progress';
import './ProgressBar.css'





const ProgressBar = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollHeight = window.scrollY;
          if (scrollHeight > 1500) {
            // Initialize the first progress circle
            $('.second.circle').circleProgress({
              value: 0.9,
              size: 120,
              thickness: 10,
              startAngle: -Math.PI / 2,
              fill: { gradient: ['#4285f4', '#ea4335'] }, // Green gradient
            }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(parseInt(100 * progress) + '<i>+</i>');
            });
    
            // Initialize the second progress circle
            $('.second2.circle').circleProgress({
              value: 0.7,
              size: 120,
              thickness: 10,
              startAngle: -Math.PI / 2,
              fill: { gradient: ['#4285f4', '#ea4335'] }, // Red and Blue gradient
            }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(parseInt(500000 * progress) + '<i>+</i>');
            });
    
            // Remove the event listener after triggering
            window.removeEventListener('scroll', handleScroll);
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
    return (

      
        <div class="counting_progress">
        <span>
          <div class="second circle">
            <strong></strong>
          </div>
          <h4>Brands</h4>
        </span>
        <span>
          <div class="second2 circle">
            <strong></strong>
          </div>
          <h4>Area Sq. Ft.</h4>
        </span>
      </div> 
    );
  };
  
  export default ProgressBar;
