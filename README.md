# Noxo

A visually appealing Tic-Tac-Toe game built with React and styled using a neumorphic design.

## Features

- Clean, neumorphic UI design
- Responsive layout
- Player vs Player gameplay
- Win and draw detection
- Animated placement of X and O
- Built with React and Tailwind CSS

## Installation

1. Clone the repository:
````bash
git clone https://github.com/Quinta0/noxo.git
````
2. Navigate to the project directory:
````bash
cd noxo
````
3. Install dependencies:
````bash
npm install
````
4. Start the development server:
````bash
npm run dev
````
5. Open your browser and visit `http://localhost:3000`

## How to Play

1. The game starts with an empty 3x3 grid.
2. Two players take turns: one plays as "X" and the other as "O".
3. Click on an empty cell to place your symbol.
4. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.
5. If all cells are filled and no player has won, the game is a draw.

## Customization

You can customize the neumorphic design by modifying the shadow values in the Tailwind classes. The current design uses a light gray background (#bebebe) for shadows.

To change the animation of symbol placement, modify the `animate-rise` keyframes in your `tailwind.config.js` file.

## Technologies Used

- React
- Next.js
- Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).