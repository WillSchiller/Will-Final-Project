# A Solana Restaurant Review Dapp

## Project Structure


## Solana Programs

Solana programs are located in the `programs` directory. It contains three files:
### lib.rs

`lib.rs` provides the entry point via the `process_instruction` function. `process_instruction` can handle two instruction types:
 * `add_review`: Adds a new review with a title, rating, description, and location.
 *   `update_review`: Updates an existing review's rating, description, and location.

 ### Instruction.rs

    `Instruction.rs` defines the `ReviewInstruction` enum an mostly handles the encoding and decoding data/ serialization and deserialization of data.

 1. **Initial Split**: The function begins by separating the instruction variant identifier from the rest of the data. This step is crucial for determining the subsequent path of execution.
2. **Deserialization**: It then proceeds to deserialize the rest of the data into a `ReviewPayload` instance, transforming the byte stream into a format that is meaningful and usable within the Rust ecosystem.
3. **Match and Construct**: Depending on the extracted variant, the function constructs the appropriate `ReviewInstruction` variant, populating it with data from `ReviewPayload`.

### state.rs

`state.rs` defines the account state for the program.

## Frontend

The front is built with Next.js and Typescript. it provides a connection to the Solana blockchain via the `@solana/web3.js` library. Connections are handled in the `components/WalletContextProvider.tsx` file and a simple next js interface to submit reviews. 

## Testing

The dapp is deployed and working on devnet. It included update for location in the ui and full integration with smart contracts. **You can check it out here! --> https://main--zesty-praline-49c439.netlify.app/** 

You can find the program here: https://explorer.solana.com/address/AMszXBZPi3Fa9vPe4vhriW5YTEf8ipymZzRN9cfk6jFk?cluster=devnet




## Getting Started

First, install required libraries:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
