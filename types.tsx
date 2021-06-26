export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};


export type PlayerType = {
  name :undefined;
}

export type CardType = {
  number: string;
  color: string;
  rule: string;
  taken : boolean
}

export type CardList = {
  cards : CardType[]
}

export  type PlayerList ={
  players : PlayerType[];
}


