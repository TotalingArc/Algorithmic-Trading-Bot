# Simple Bitcoin Trading Bot

This project implements a simple trading bot for Bitcoin (BTC) using the Gemini exchange API and CryptoCompare API. The bot uses a moving average (MA) strategy to make buy and sell decisions.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Main Script](#main-script)
  - [Exchange Module](#exchange-module)
  - [Indicators Module](#indicators-module)
- [License](#license)

## Features

- Fetches current Bitcoin price from Gemini exchange
- Calculates hourly moving average (MA) from CryptoCompare
- Implements a basic trading strategy:
  - Buy if the current price is below the MA and there is no existing position
  - Sell if the current price is above the MA and there is an existing position
  - Hold otherwise
- Logs trading decisions and execution details

## Requirements

- Node.js
- `node-fetch`
- `gemini-api`
- `cryptocompare`

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bitcoin-trading-bot.git
    cd bitcoin-trading-bot
    ```

2. Install dependencies:

    ```bash
    npm install node-fetch gemini-api cryptocompare
    ```

## Configuration

1. Add your Gemini API key and secret in the `exchange.js` file:

    ```javascript
    const secret = ""; // Add your secret key
    const key = ""; // Add your API key
    ```

2. Add your CryptoCompare API key in the `indicators.js` file:

    ```javascript
    const CCAPIKey = ""; // Add your CryptoCompare API key
    ```

## Usage

To run the trading bot, execute the following command:

```bash
node main.js
