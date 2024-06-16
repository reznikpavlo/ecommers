import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

model Pet {
    @minLength(100)
    name: string;
  
    @minValue(0)
    @maxValue(100)
    age: int32;
  
    kind: "dog" | "cat" | "fish";
  }