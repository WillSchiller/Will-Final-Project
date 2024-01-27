import * as borsh from "@project-serum/borsh";

export class Review {
    title: string;
    rating: number;
    description: string;
    location: string;  // New location field

    constructor(title: string, rating: number, description: string, location: string) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.location = location; // Initialize the new location field
    }

    borshInstructionSchema = borsh.struct([
        borsh.u8("variant"),
        borsh.str("title"),
        borsh.u8("rating"),
        borsh.str("description"),
        borsh.str("location"), // Include location in the Borsh schema
    ]);

    static borshAccountSchema = borsh.struct([
        borsh.bool("initialized"),
        borsh.u8("rating"),
        borsh.str("description"),
        borsh.str("title"),
        borsh.str("location"), // Include location in the Borsh schema
    ]);

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000);
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
    }

    static deserialize(buffer?: Buffer): Review | null {
        if (!buffer) {
            return null;
        }

        try {
            const { title, rating, description, location } = // Deserialize the location
                this.borshAccountSchema.decode(buffer);
            return new Review(title, rating, description, location); // Use the deserialized location
        } catch (e) {
            console.log("Deserialization error:", e);
            console.log(buffer);
            return null;
        }
    }
}
