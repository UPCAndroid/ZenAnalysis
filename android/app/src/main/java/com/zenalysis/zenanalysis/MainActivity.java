package com.zenalysis.zenanalysis;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button confirmBtn = (Button) findViewById(R.id.confirmBtn);
        EditText choiceInput = (EditText) findViewById(R.id.choice_input);
        confirmBtn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Confirm saved", Toast.LENGTH_SHORT).show();
            }
        });

        choiceInput.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
                boolean handled = false;
                if(actionId == EditorInfo.IME_ACTION_SEND){
                    Toast.makeText(MainActivity.this, "Confirm got", Toast.LENGTH_SHORT).show();
                    handled = true;
                }
                return true;
            }
        });
    }

}
