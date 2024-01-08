class uber {
    constructor(distance, distance_name, product_id, high_estimate, low_estimate, duration, estimate, currency_code) {
       
        
    this.distance = distance
    this.display_name = display_name
    this.product_id = product_id
    this.high_estimate = high_estimate
    this.low_estimate = low_estimate
    this.duration = duration
    this.estimate = estimate
    this.currency_code = currency_code
      }
      
      
  }
  
  const uber1 = new uber('6.17', 'POOL', 26546650, '15', 13, 1080, '$13-14', 'USD')
  
  
  console.log(uber1)
  