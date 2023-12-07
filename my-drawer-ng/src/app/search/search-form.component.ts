import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";

@Component({
    selector: "SearchForm",
    moduleId: module.id,
    template: `<!--
        <FlexboxLayout flexDirection="row">-->
            <TextField
                [(ngModel)]="textFieldValue"
                hint="Ingresar texto..."
            >
            </TextField><!--
            <Label *ngIf="texto.hasError('required')" text="*"></Label>
            <Label
                *ngIf="!texto.hasError('required') && texto.hasError('minlen')"
                text="4+"
            >
            </Label>
        </FlexboxLayout>-->
        <Button
            text="Buscar!"
            (tap)="onButtonTap()"
        ></Button>
    `
})
    
export class SearchFormComponent implements OnInit {
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;

    ngOnInit(): void {
        this.textFieldValue = this.inicial;
    }

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue);
        }
    }
}