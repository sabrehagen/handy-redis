import { EOL } from "os";
import { tab, twotabs, buildScript, writeFile } from "./util";
import { getFullCommands } from "./generate-usages";
import { useUnderlyingImpl } from "../src/overrides";

const generateClientInterface = async (getCommands: typeof getFullCommands) => {
    const typescriptCommands = await getCommands();

    const interfaceDeclarations = typescriptCommands.map(commandInfo => {
        const docs = [
            `/**`,
            ` * ${commandInfo.docs}`,
            ` */`,
        ];
        if (useUnderlyingImpl.has(commandInfo.name as any)) {
            return [
                ...docs,
                `${commandInfo.name}: RedisClient["${commandInfo.name}"];`,
            ].map(line => `    ${line}`).join(EOL);
        }

        const argList = commandInfo.args
            .map(a => `${a.name}: ${a.type}`)
            .join(`,${EOL}${twotabs}`);

        const argDeclaration = argList.length > 0
            ? [EOL, twotabs, argList, EOL, tab].join("")
            : "";

        return [
            ...docs,
            `${commandInfo.name}(${argDeclaration}): Promise<${commandInfo.returnType}>;`,
        ].map(line => `    ${line}`).join(EOL);
    });
    const interfaceContents = [
        `import { RedisClient } from "redis";`,
        `import { AdditionalFunctions } from "../overrides";`,
        `export interface IHandyRedis extends AdditionalFunctions {`,
        `    /** the underlying node_redis client */`,
        `    redis: RedisClient;`,
        ...interfaceDeclarations,
        `}`,
        ``,
    ].join(EOL);

    return interfaceContents;
};

buildScript(module, async () => {
    const interfaceFile = `src/generated/interface.ts`;

    writeFile(interfaceFile, "export type IHandyRedis = any; // placeholder");

    writeFile(interfaceFile, await generateClientInterface(getFullCommands));
});
