export interface Restaurant{
    id: string;
      name: string;
      image: string;
      description: string;
      address: string;
      score: number;
      ratings: number;
}

export interface Comment{
  id:string,
  user_id:string,
  restaurant_id:string,
  content:string
}

export class ControllerRestaurant{
  private rests:Restaurant[]
  
  
  
  constructor(rests:Restaurant[]){
    this.rests=rests
  }
}



